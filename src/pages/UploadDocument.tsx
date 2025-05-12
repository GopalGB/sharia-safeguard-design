
import React, { useState } from 'react';
import { Upload, FileType, X } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const UploadDocument = () => {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm({
    defaultValues: {
      documentName: '',
      documentType: '',
      description: '',
    },
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList: FileList) => {
    const newFiles = Array.from(fileList);
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };
  
  const handleSubmit = form.handleSubmit((data) => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one file to upload",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, you would handle file uploads here
    // For now, we'll just show a success message
    toast({
      title: "Documents queued for upload",
      description: `${files.length} document(s) will be processed`,
    });
    
    // Reset form and files
    form.reset();
    setFiles([]);
  });
  
  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    
    switch (extension) {
      case 'pdf':
        return <FileType className="h-8 w-8 text-red-500" />;
      case 'doc':
      case 'docx':
        return <FileType className="h-8 w-8 text-blue-500" />;
      case 'xls':
      case 'xlsx':
        return <FileType className="h-8 w-8 text-green-500" />;
      case 'ppt':
      case 'pptx':
        return <FileType className="h-8 w-8 text-orange-500" />;
      default:
        return <FileType className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <PageTransition>
      <DashboardLayout 
        title="Upload Documents" 
        subtitle="Add new documents for compliance verification"
        showWelcome={false}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Upload Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Document Upload</CardTitle>
                <CardDescription>
                  Drag and drop your documents or click to browse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div 
                      className={`border-2 border-dashed rounded-lg p-8 text-center ${
                        dragActive 
                          ? 'border-mutedTeal bg-mutedTeal/5' 
                          : 'border-gray-300 hover:border-mutedTeal hover:bg-gray-50'
                      } transition-all duration-200`}
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                    >
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <Upload className="h-12 w-12 text-mutedTeal opacity-60" />
                        <div className="text-xl font-medium text-navyTrust">
                          Drop files here or click to browse
                        </div>
                        <p className="text-sm text-deepCharcoal/60 max-w-xs">
                          Upload PDF, DOC, DOCX, XLS, XLSX files. Max file size: 100MB.
                        </p>
                        <Input
                          id="file-upload"
                          type="file"
                          multiple
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        <Label
                          htmlFor="file-upload"
                          className="bg-gradient-to-r from-navyTrust to-mutedTeal text-white px-4 py-2 rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                        >
                          Select Files
                        </Label>
                      </div>
                    </div>
                    
                    {files.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-medium text-navyTrust mb-4">Selected Files ({files.length})</h3>
                        <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                          {files.map((file, index) => (
                            <div 
                              key={index} 
                              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100"
                            >
                              <div className="flex items-center space-x-3">
                                {getFileIcon(file.name)}
                                <div>
                                  <p className="font-medium text-deepCharcoal">{file.name}</p>
                                  <p className="text-xs text-deepCharcoal/60">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                  </p>
                                </div>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => removeFile(index)}
                              >
                                <X className="h-4 w-4 text-deepCharcoal/60" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="documentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Document Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter document name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="documentType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Document Type</FormLabel>
                            <FormControl>
                              <Input placeholder="Contract, Agreement, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Add any relevant details about the document" 
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-navyTrust to-mutedTeal text-white"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Documents
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          {/* Information Panel */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Document Requirements</CardTitle>
                <CardDescription>
                  Guidelines for document submission
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-navyTrust mb-1">Supported File Types</h4>
                  <p className="text-sm text-deepCharcoal/70">
                    PDF, DOC, DOCX, XLS, XLSX
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-navyTrust mb-1">File Size Limits</h4>
                  <p className="text-sm text-deepCharcoal/70">
                    Maximum 100MB per file, 500MB total per upload
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-navyTrust mb-1">Processing Time</h4>
                  <p className="text-sm text-deepCharcoal/70">
                    Documents typically process in 5-10 minutes, depending on size and complexity
                  </p>
                </div>
                
                <div className="p-3 bg-lightSand rounded-lg border border-sandGold/30 mt-6">
                  <h4 className="text-sm font-medium text-navyTrust mb-1">Important Notice</h4>
                  <p className="text-xs text-deepCharcoal/70">
                    All documents are securely processed in UAE-based data centers in compliance with PDPL regulations. 
                    Documents containing sensitive personal information should be marked accordingly.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-navyTrust/10 to-mutedTeal/5 p-4 rounded-lg mt-6">
                  <h4 className="text-sm font-medium text-navyTrust mb-2">Need Help?</h4>
                  <p className="text-xs text-deepCharcoal/70 mb-3">
                    Our support team is available to assist with any document upload issues.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardLayout>
    </PageTransition>
  );
};

export default UploadDocument;
